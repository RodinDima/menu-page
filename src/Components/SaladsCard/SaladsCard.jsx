import React, { useCallback, useState } from "react";

import { ReactComponent as Like } from "./Image/like.svg";

import { CardLeft, CardRight } from "../../ConstantsCard";

import "./style.css";

const SaladsCard = () => {

  const [like, setLike] = useState(false);

  const [listLikeIds, setListLikeIds] = useState([])



  const handleToogleLike = useCallback((likeid) => {
    if (listLikeIds.includes(likeid)) {
      setListLikeIds(listLikeIds.filter((id) => id !== likeid));
      setLike(!like);
    } else {
      setListLikeIds([...listLikeIds, likeid]);
    }
  }, [listLikeIds, like]);


  return (
    <>
      <div className="salads__inner">
        <div className="salads__card-left">
          {CardLeft.map((item) => (
            <a href="#" className="salads__card" key={item.id}>
              <div className="salads__card-item">
                <div className="salads__card-img">
                  <img src={item.photo} alt="#" />
                </div>
                <Like onClick={() => handleToogleLike(item.id)} className={`like ${listLikeIds.includes(item.id) ? 'active' : ''}`} />
                

                <p className="salads__card-title">{item.name}</p>
                <p className="salads__card-descr">{item.descr}</p>
                <p className="salads__card-price">{item.price}</p>
              </div>
            </a>
          ))}
        </div>
        <a href="#" className="salads__card">
          <div className="salads__card-right">
            {CardRight.map((item) => (
              <div className="salads__card-item" key={item.id}>
                <div className="salads__card-img">
                  <img src={item.photo} alt="#" />
                </div>

                <Like className="like" />

                <p className="salads__card-title">{item.name}</p>
                <p className="salads__card-descr">{item.descr}</p>
                <p className="salads__card-price">{item.price}</p>
              </div>
            ))}
          </div>
        </a>
      </div>
    </>
  );
};

export default SaladsCard;
