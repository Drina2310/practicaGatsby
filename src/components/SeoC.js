import React from 'react'
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

export default function SeoC(props) {
    const { title, description, meta, lang } = props;

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    const metaDescription = description || data.site.siteMetadata.description
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    name: 'og:title',
                    content: title,
                },
                {
                    name: 'og:description',
                    content: metaDescription,
                },
                {
                    name: 'og:type',
                    content: "website",
                },
                {
                    name: 'twitter: card',
                    content: "summary",
                },
                {
                    name: 'twitter:creator',
                    content: data.site.siteMetadata.author,
                },
                {
                    name: 'twitter:creator',
                    content: data.site.siteMetadata.author,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    )
}

SeoC.defaultProps = {
    lang: "es",
    meta: [],
    description: ""
}

SeoC.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}