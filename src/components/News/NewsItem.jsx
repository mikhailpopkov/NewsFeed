import Button from "../UI/Button/Button";
import classes from  "./News.module.scss";

function NewsItem({news}) {
    const dateObj = new Date(news.createdAt);
    const formattedDate = `${dateObj.getDate()} ${dateObj.toLocaleString("en-US", { month: "long" })}, ${dateObj.getFullYear()}`;

    return (
        <div className={classes.block}>
            <div className={classes.blockImgbox}>
                <img src={news.imageUrl} alt={news.title}/>
            </div>
            <div className={classes.blockDate}>{formattedDate}</div>
            <div className={classes.blockTitle}>{news.title}</div>
            <div className={classes.blockDescription}>{news.description}</div>
            <div className={classes.blockFooter}>
                <div className={classes.blockAuthor}>
                    <div className={classes.blockAuthorImgbox}>
                        <img src={news.author.backgroundUrl} loading="lazy"/>
                    </div>
                    <div className={classes.blockAuthorName}>{news.author.name}</div>
                </div>
                <Button>Читать подробнее</Button>
            </div>
        </div>
    )
}

export default NewsItem;