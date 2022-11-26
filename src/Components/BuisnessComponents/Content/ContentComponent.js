import React, {useEffect, useState} from "react";
import ContentService from "../../../Services/ContentService";
import styles from "./ContentComponent.module.css"
import {Container} from "react-bootstrap"


function ContentComponent() {
    const [contents, setContent] = useState([])

    useEffect(() => {
        getContents()
    }, [])

    const getContents = () => {

        ContentService.getContent().then((response) => {
            setContent(response.data)
            console.log(response.data);
        });
    };
    return (
        <div className={styles.content}>
            <div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className={styles.simpleContent}>
                    {
                        contents.map(
                            content =>
                                <div className={styles.videoResponsive} key={content.contentId}>
                                    <h2 className={styles.title}> {content.title}</h2>
                                    <div className={styles.info}> {content.info}</div>
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            width="100%"
                                            height="480"
                                            src={content.link}
                                            frameBorder="1"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default ContentComponent