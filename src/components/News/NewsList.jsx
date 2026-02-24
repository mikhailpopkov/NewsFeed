import {useEffect, useState} from "react";
import FetchData from "../../API/FetchNews";
import { useFetching } from "../../hooks/useFetching";
import classes from './News.module.scss';
import NewsItem from "./NewsItem";
import "/src/styles/style.scss";
import Tags from "../UI/Tags/Tags";

function NewsList({title}) {
    const [activeTag, setActiveTag] = useState(null);
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
            <Tags value={activeTag} onClickActiveTag={(i) => setActiveTag(i)}/>
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
        </>
    )
}

export default NewsList;