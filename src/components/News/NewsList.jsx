import {useEffect, useState} from "react";
import FetchData from "../../API/FetchNews";
import { useFetching } from "../../hooks/useFetching";
import classes from './News.module.scss';
import NewsItem from "./NewsItem";
import "/src/styles/style.scss";

function NewsList({title}) {
    const [news, setNews] = useState([]);
    const [fetching, isLoading, isError] = useFetching(async () => {
        const newsData = await FetchData.getNews();
        setNews(newsData.data);
    })

    useEffect(() => {
        fetching();
    }, [])

    return (
        <>
            <h1>{title}</h1>
            <div className="container">
                {
                    isError &&
                    <h2>Произошла ошибка {isError}</h2>
                }
                {
                    isLoading ? 
                    <h2>Загрузка новостей...</h2>
                    :
                    <>
                        <div className={classes.news}>
                            <div className={classes.wrapper}>
                                {
                                    news.map((item, index) => 
                                        <NewsItem key={index} news={item}/>
                                    )
                                }
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default NewsList;