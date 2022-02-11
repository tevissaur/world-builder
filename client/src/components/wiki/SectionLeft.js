import React from "react";
import Box from '@mui/material/Box'


export default function SectionLeft(props) {
    return (
        <Box component='section' className="main-page-left" id="main-index">
            <article className="article-container">
                <h1 className="article-title">The Geography of Forene</h1>
                <figure className="article-pic-right row">
                    <img alt="some alt text" src="/assets/forene-topographical.jpg" />
                    <figcaption>Illustration of Forene</figcaption>
                </figure>
                <p>
                    The ancient continent of Forene is vast, and contains a large variety of creatures. At the center of the continent lies an immense volcano with mountain ranges jutting out from it like veins, carving out the kingdoms themselves. Three large peninsulas line the southern region. The Western Plains and the regions north of it, up until the Kragdrench Canal, consist of four human kingdoms, who have been warring and quarrelling with one another for as long as history. The Western Deserts are occupied by bestial creatures, such as Orcs, Goblins, Hobgoblins, Bugbears, and others. The two southern peninsulas are where the elves, and halflings live, a relatively peaceful region as the elves prefer a more diplomatic approach to conflicts. In the frigid and harsh northern regions live the Dwarves, master craftsmen and stubborn as the metal they bend.
                </p>
            </article>
            <article className="article-container">
                <h1 className="article-title">Featured Article</h1>
                <figure className="article-pic-right row">
                    <img alt="some alt text" src="/assets/durglagh.png" />
                    <figcaption>Secrets bubble underneath these swamps.</figcaption>
                </figure>
                <p>
                    The swampy regions of Durglagh lie just beyond the Sea of Passwell, named after the city that connects Durglagh to Eleron. Durglagh has a bloody history. Switching between being a vassal of Eleron and The Torwoods, the people have had enough and just recently found a shaky peace and an unstable independence. The only reason their state exists is by the sanction of the Dragon's Moot, a meeting of the great nations on the continent. The Lord of these lands, [to be named] is a proud son of a bitch. Lots of secrets bubble underneath these bogs.
                </p>
            </article>
            <article className="article-container">
                <h1 className="article-title">News of the Realm!</h1>
                <p>
                    Newly declared King of Durglagh, Wendrake Addington, to feast with the Lords of the Torwoods this Festifmar! In a stunning move for the newly crowned statesmen he opts for diplomacy, rather than rile up a ruckus; a peacekeeper, he is. The Emperor has sent his most trusted diplomat, Emile Brack, to aid the green King in his attempt to cool the tensions between him and his former sovereigns, The Lords of the Torwoods. The Treaty of Alderwick will initiate an indefinite truce between the Empire and the Nordlings. Godspeed to Emile, and as always, Godspeed to The Empire!
                </p>
            </article>
        </Box>
    )
}