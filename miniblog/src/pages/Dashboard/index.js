import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import Loading from "../../components/Loading";
const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  const deleteDocument = (id) => {};
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Dashboard</h2>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Que pena, não foram encontrados posts... 😞</p>
            <Link to="/posts/create" className={`${styles.btn} btn`}>
              Criar primeiro post
            </Link>
          </div>
        ) : (
          <div className={styles.my_posts}>
            <p>Gerencie os seus posts</p>
            <div>
              <span>Título:</span>
              <span>Ações:</span>
            </div>
            {posts &&
              posts.map((post) => (
                <div key={post.id} className={styles.controls}>
                  <p>{post.title}</p>
                  <Link
                    to={`/posts/${post.id}`}
                    className={`${styles.btn} btn`}
                  >
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className={`${styles.btn} btn`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn"
                    onClick={() => deleteDocument(post.id)}
                  >
                    Excluir
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;
