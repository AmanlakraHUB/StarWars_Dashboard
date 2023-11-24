import React, { useEffect, useState } from "react";
import styles from "../styleSheet/card.module.css";

const Card = ({ details }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  function setCard() {
    setIsCardOpen((prev) => !prev);
  }
  return (
    <div className={styles.card} >
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
       >
        <div className={`modal-dialog modal-dialog-centered`}>
          <div className={`modal-content ${styles.modalContent}`}>
            <img src="./ficon.png" className={styles.ficon} style={{color:"white"}}></img>
            <div >
              <h2>Caution!</h2>
              <span>Are you sure want to delete this film</span>
            </div>

            <div className={styles.btnGroup}>
              <button
                type="button"
                className={`btn btn-secondary ${styles.cancel}`}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn btn-secondary ${styles.yes}`}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================= */}

      {/* <!-- Modal 2 --> */}
      {isCardOpen && (
        <div className={styles.modal2}>
          <div className={styles.headingDiv}>
            <h2 style={{color:"white"}}>Movie Details</h2>
            <div style={{padding:"10px"}} onClick={()=>setIsCardOpen(false)}><img src="./close.png" ></img></div>
            
          </div>
          <div className={styles.modal2Main}>
            <div className={styles.mainImgContainer}>
              <span style={{color:"white"}}>Image</span>
              <img src="./welcome.png" alt="nofound"></img>
            </div>
            <div className={styles.mainTitleContainer}>
              <span style={{color:"white"}}> Title</span>
              <div>{details.title}</div>
            </div>
            <div className={styles.mainCrawlContainer}>
              <span style={{color:"white"}}>Opening Crawl</span>
              <div>{details.opening_crawl}</div>
            </div>
            <div className={styles.mainGenreContainer}>
              <span style={{color:"white"}}>Genre</span>
              <div>Super Hero</div>
            </div>
          </div>
          <div className={styles.modal2Footer}>
            <button
              type="button"
              className={`btn btn-secondary ${styles.close}`} onClick={()=>setIsCardOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ========================================= */}
      <div className={styles.movieImgDiv} onClick={setCard}>
        <img src="./welcome.png" className={styles.movieImg}></img>
      </div>
      <div className={styles.details}>
        <div className={styles.leftDiv} onClick={setCard}>
          <img src="./reel.png" alt="" className={styles.reel}></img>
          <span style={{backgroundColor: "#4e4b4e"}}>{details.title}</span>
        </div>
        <img src="./threedot.png"
          className={`${styles.more} dropdown-toggle`}
          data-bs-toggle="dropdown"
          aria-expanded="false" alt="" ></img>
        <ul className={`dropdown-menu ${styles.bgCol}`}>
          <li>
            <a className={`dropdown-item ${styles.menuItem} ${styles.bgCol}`} href="# ">
              <img src="./view.png" style={{backgroundColor:"white"}}></img>View
            </a>
          </li>
          <li>
            <a className={`dropdown-item ${styles.menuItem} ${styles.bgCol}`} href="# ">
              <img src="./download.png" style={{backgroundColor:"white"}}></img>Download
            </a>
          </li>
          <li>
            <a className={`dropdown-item ${styles.menuItem} ${styles.bgCol}`} href="# ">
              <img src="./rename.png" style={{backgroundColor:"white"}}></img>Rename
            </a>
          </li>
          <li>
            <a className={`dropdown-item ${styles.menuItem} ${styles.bgCol}`} href="# ">
              <img src="./share.png" style={{backgroundColor:"white"}}></img>Share link
            </a>
          </li>
          <li>
            <a className={`dropdown-item ${styles.menuItem} ${styles.bgCol}`} href="#" >
              <img src="./move.png" style={{backgroundColor:"white"}}></img>Move
            </a>
          </li>
          <li>
            <a className={`dropdown-item ${styles.menuItem} ${styles.bgCol}`} href="# ">
              <img src="./markprivate.png"style={{backgroundColor:"white"}}></img>Mark private
            </a>
          </li>
          <li>
            <a
              className={`dropdown-item ${styles.delete} ${styles.menuItem} ${styles.bgCol}`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal" href="# "
            >
              <img src="./delete.png" style={{backgroundColor:"white"}}></img>Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
