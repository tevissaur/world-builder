import React from 'react'


export default function Quote(props) {

    // const handleAuthor = () => {
        
    // }

    return (
        <section id="quote-container">
            <blockquote className="quote">
                '"Who knows what secrets this world holds, but some things may be best left a secret. This world is indubitably threatening, but looks can be deceiving at times."'
            </blockquote>
            <blockquote className="author">
                - <b>Artemon Fox</b>, inventor, scientist, philanthroper
            </blockquote>
        </section>
    )
}