export default function Page(){
    return(
        <>
        {/* Head section */}
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Mariz A. Balderas | Portfolio</title>
            <link rel="stylesheet" href="styles.css" />
            {/* Google  */}
            <link 
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" 
                rel="stylesheet"
            />
            {/* Icons */}
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
            />
        </head>

        <body>
            {/* Header */}
            <header>
                <nav className="navbar">
                    <h1 className="logo">Mariz A. Balderas</h1>
                    <ul className="nav-links">
                        <li><a href="#intro">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="resume.pdf" className="btn" download>Resume</a></li>
                    </ul>
                </nav>
            </header>

            {/* Introduction */}
            <section id="intro" className="intro">
                <img src="images/profile.jpg" alt="My Photo" className="profile-pic" />
                <h2>Hello, I’m <span className="highlight">Mariz A. Balderas</span></h2>
                <h3 className="subtitle">Information Technology Student</h3>
                <p>
                    I’m an IT student who enjoys combining creativity and technology. 
                    I like designing clean user interfaces, exploring new tools, and finding smart solutions to problems.
                </p>
            </section>

            {/* Projects */}
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="project-grid">
                    <div className="card">
                        <h3>No Project yet</h3>
                    </div>
                </div>
            </section>
            
            {/* Skills */}
            <section id="skills" className="skills">
                <h2>Skills</h2>
                <div className="skills-list">
                    <div className="skill">Computer Literate</div>
                    <div className="skill">Community Engagement</div>
                    <div className="skill">Adaptability</div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="contact">
                <h2>Contact Me</h2>
                <p>Email: <a href="mailto:marixbalderas@gmail.com">marixbalderas@gmail.com</a></p>
                <p>Phone: <a href="tel:09682888754">09682888754</a></p>
            </section>

            {/* Footer */}
            <footer>
                <p>© 2025 Mariz A. Balderas | All Rights Reserved</p>
            </footer>
        </body>
        </>
    )
}
