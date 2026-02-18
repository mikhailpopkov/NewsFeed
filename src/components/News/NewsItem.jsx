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
            <div className={classes.blockContent}>{news.content}</div>
        </div>
    )
}

export default NewsItem;