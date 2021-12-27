import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function LayoutBasic(props) {
    const { children } = props

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)
    console.log(data)

    return (
        <div>
            <h1>Title App</h1>
            {children}
        </div>
    )
}
