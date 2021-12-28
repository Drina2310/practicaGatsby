import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import './LayoutBasic.css';

export default function LayoutBasic(props) {
    const { children } = props

    const data = useStaticQuery(graphql`
        query SiteDataQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    return (
        <div>
            <div className="header">
                <h1>{data.site.siteMetadata.title}</h1>
                <div className="menu">
                    <Link to="/">Index</Link>
                    <Link to="/about-me">About</Link>
                </div>
            </div>
            {children}
        </div>

    )
}
