import React from 'react'

function ExternalLinks() {
    return (
        <div id="external-links">
            <ul>
                <li>
                    <a
                        className="nav-link"
                        href="https://github.com/Rainbow-Collective/petsite/issues"
                    >
                        GitHub - Issue Tracker
                    </a>
                </li>
                <li>
                    <a
                        className="nav-link"
                        href="https://github.com/Rainbow-Collective/petsite/wiki"
                    >
                        GitHub - Wiki
                    </a>
                </li>
                <li>
                    <a
                        className="nav-link"
                        href="https://ashtonmackenzie.com/portfolio/the-guild-of-the-magi-everything/"
                    >
                        About the project
                    </a>
                </li>
                <li>
                    <a
                        className="nav-link"
                        href="https://ashtonmackenzie.com/about-me/"
                    >
                        About the developer
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ExternalLinks