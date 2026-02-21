import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import FetchData from "../API/FetchNews";
import { useFetching } from "../hooks/useFetching";
import Button from "../components/UI/Button/Button";
import "/src/styles/style.scss"

function NewsDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const [newsDetailData, setNewsDetailData] = useState({});

    const dateObj = new Date(newsDetailData.createdAt);
    const formattedDate = `${dateObj.getDate()} ${dateObj.toLocaleString("en-US", { month: "long" })}, ${dateObj.getFullYear()}`;

    const [fetching, isLoading, isError] = useFetching(async () => {
        const res = await FetchData.getNewsDetail(params.id);
        setNewsDetailData(res)
    })

    useEffect(() => {
        fetching(params.id)
    }, [])

    return (
        <>
            {
                isLoading ?
                <h1>Загрузка новости...</h1> 
                :
                <>
                    <div className="b-news-detail">
                        <div className="news-detail__container">
                            <div className="news-detail__content">
                                <div className="news-detail__info">
                                    <div className="news-detail__wrapper">
                                        <div className="news-detail__author">
                                            <div className="news-detail__author-imgbox">
                                                <img src={newsDetailData.author.backgroundUrl} loading="lazy"/>
                                            </div>
                                            <div className="news-detail__author-name">{newsDetailData.author.name}</div>
                                        </div>
                                        <div className="news-detail__date">
                                            {formattedDate}
                                        </div>
                                    </div>
                                    <ul className="news-detail__tags">
                                        {
                                            newsDetailData.tags.map(tag =>
                                                <li key={tag.id}>{tag.name}</li>
                                            )
                                        }
                                    </ul>
                                    <h1>{newsDetailData.title}</h1>
                                    <div className="news-detail__text">
                                        {newsDetailData.content}
                                    </div>
                                    <Button onClick={() => navigate(-1)}>Все новости</Button>
                                </div>
                                <div className="news-detail__imgbox">
                                    <img src={newsDetailData.imageUrl} alt={newsDetailData.title} loading="lazy"/>
                                </div>
                            </div>
                            <div className="news-detail__hot">
                                Тут будет список горячих новостей
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default NewsDetail;