import React from 'react'

const ApodCard = ({date, explanation, hdurl, media_type, title, url}) => {

    return (

        <div className="card mt-5">

            <div className="card-image box">
                <figure className="image is-4by3">
                    <img src={hdurl}
                         alt={title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="content box">
                    <p className={'title'}>{title}</p>

                    {explanation}

                    <br/>
                    <time dateTime={date}>{date}</time>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                          <span>
                            View <a
                              href={url}>{media_type}</a>
                          </span>
                    </p>
                    <p className="card-footer-item">
                        <span>
                        Media Type: <span>{media_type}</span>
                        </span>
                    </p>
                </footer>
            </div>
        </div>

    )
}

export default ApodCard
