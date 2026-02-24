import { useEffect, useState } from 'react';
import cl from './Tags.module.scss';
import { useFetching } from '../../../hooks/useFetching';
import FetchData from '../../../API/FetchNews';

function Tags({value, onClickActiveTag}) {
    const [tags, setTags] = useState([]);
    const [fetchingTags, isLoadingTags, isErrorTags] = useFetching(async () => {
        const newsData = await FetchData.getNewsTags();
        setTags(newsData);
    })

    useEffect(() => {
        fetchingTags();
    }, [])

    return (
        <div className={cl.tags}>
            {
                tags.map((tag, i) => 
                    <button onClick={() => onClickActiveTag(i)} className={value == i ? `${cl.tagBtn} ${cl.active}` : cl.tagBtn} key={tag.id}>{tag.name}</button>
                )
            }
        </div>
    )
}

export default Tags;