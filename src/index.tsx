import React, { useState } from 'react'
import './homepage.css'

const Homepage: React.FC = () => {
  const [playing, setPlaying] = useState(false)
  async function togglePlay() {
    const node: any = document.getElementById('banner-video')
    console.log(node)
    const titleWords: any = document.querySelector('.title-words')
    if (playing) {
      titleWords.style.opacity = '1'
      await new Promise(res =>
        setTimeout(() => res((titleWords.style.display = 'flex')), 500),
      )
      node?.pause?.()
      node.currentTime = 0
    } else {
      titleWords.style.opacity = '0'
      await new Promise(res =>
        setTimeout(() => res((titleWords.style.display = 'none')), 500),
      )
      node?.play?.()
    }
    setPlaying(!playing)
  }
  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        fontSize: '16px',
        top: 0,
        width: '100vw',
        height: '100vh',
        minWidth: '600px',
        minHeight: '400px',
        color: 'white',
        overflowY: 'auto',
        zIndex: 9999,
        backgroundColor: 'white',
      }}
    >
      <header
        style={{
          width: '100%',
          height: '84px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'inherit',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 1,
          backgroundColor: '#00000020',
        }}
      >
        <div
          className="header-left"
          style={{
            paddingLeft: '48px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontWeight: 600,
          }}
        >
          <a
            href="/"
            style={{
              fontSize: '1.6rem',
              color: 'inherit',
              marginRight: '167px',
            }}
          >
            Nebula
          </a>
          <span
            style={{
              width: '1px',
              height: '2rem',
              borderRight: '1px solid white',
            }}
          />
          {/* <span style={{ marginLeft: '2.8vw' }}>
              <a href="/tutorial" style={{ color: 'inherit' }}>
                Tutorial
              </a>
            </span> */}
          <span style={{ marginLeft: '2.8vw' }}>
            <a href="/docs" style={{ color: 'inherit' }}>
              Docs
            </a>
          </span>
          <span style={{ marginLeft: '2.8vw' }}>
            <a href="/examples" style={{ color: 'inherit' }}>
              Examples
            </a>
          </span>
          <span style={{ marginLeft: '2.8vw' }}>
            <a href="/survey" style={{ color: 'inherit' }}>
              Survey
            </a>
          </span>
        </div>
        <div
          className="header-right"
          style={{
            paddingLeft: '48px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontWeight: 600,
          }}
        >
          <a
            href="https://github.com/nebula-vis/Nebula"
            style={{ color: 'inherit', marginRight: '2.8vw' }}
          >
            Github
          </a>
          <a href="/editor" style={{ color: 'inherit', marginRight: '2.8vw' }}>
            Editor
          </a>
          {/* <a href="/404" style={{ marginRight: '2.8vw', color: 'inherit' }}>
              Zh
            </a> */}
        </div>
      </header>

      <div
        style={{
          width: '100%',
          height: 'max-content',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: 'calc(66vmin + 84px)',
            justifyContent: 'center',
            position: 'relative',
            alignItems: 'baseline',
            background: '#373C47' ?? 'url(/assets/banner-2.png)',
          }}
        >
          <video
            onClick={e => e.stopPropagation()}
            controls
            id="banner-video"
            style={{
              cursor: 'pointer',
              width: '88vmin',
              height: '66vmin',
              marginTop: '84px',
              objectFit: 'fill',
            }}
          >
            <source src="/assets/nebula.mp4" type="video/mp4" />
          </video>
          <span style={{ padding: '8px' }}>
            <div
              onClick={togglePlay}
              style={{
                width: '16px',
                height: '16px',
                backgroundColor: 'white',
                cursor: 'pointer',
              }}
            ></div>
          </span>
        </div>

        <div
          className="title-words"
          style={{
            position: 'absolute',
            display: 'flex',
            top: 84,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#373C47',
            transitionDuration: '1s',
          }}
        >
          <div
            style={{
              fontSize: '90px',
              fontWeight: 600,
            }}
          >
            Nebula
          </div>
          <div style={{ textAlign: 'center', transitionDuration: '2s' }}>
            A Declarative Grammar for Coordinating Visualizations. <br />
            Link the visualizations with easy-to-learn commands and show the
            relation of data behind the charts.
          </div>
          {!playing && (
            <img
              onClick={togglePlay}
              src="/assets/play-btn.png"
              style={{ width: '68px', marginTop: '30px', cursor: 'pointer' }}
            />
          )}
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '240px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            width: '130px',
            margin: '21px 35px 22px 35px',
            borderTop: '2px solid #10239E',
          }}
        />

        <span
          style={{
            fontSize: '32px',
            color: '#10239E',
          }}
        >
          Built-in Charts & Diagrams
        </span>
        <span
          style={{
            width: '130px',
            margin: '21px 35px 22px 35px',
            borderTop: '2px solid #10239E',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <img
          src="/assets/visualizations.png"
          style={{
            maxWidth: '1152px',
            width: '100%',
            boxShadow: ' 0 0 5px #00000020',
          }}
        />
      </div>

      <div
        style={{
          paddingTop: '120px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '1152px',
            height: '554px',
            boxShadow: ' 0 0 5px #00000020',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '160px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                width: '130px',
                margin: '21px 35px 22px 35px',
                borderTop: '2px solid #10239E',
              }}
            />

            <span
              style={{
                fontSize: '32px',
                color: '#10239E',
              }}
            >
              Core Advantages
            </span>
            <span
              style={{
                width: '130px',
                margin: '21px 35px 22px 35px',
                borderTop: '2px solid #10239E',
              }}
            />
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: 'black',
            }}
          >
            <div
              style={{
                width: '280px',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}
            >
              <img
                src="/assets/manycases.png"
                style={{ width: '198px', height: '130px' }}
              />
              <span
                style={{
                  fontSize: '22px',
                  margin: '5px 0',
                }}
              >
                Expressiveness
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: '14px',
                  textAlign: 'center',
                }}
              >
                Cover various coordination types differing in interaction and
                manipulation methods along with simple data transformations and
                complex mining algorithms.
              </span>
            </div>
            <div
              style={{
                width: '280px',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}
            >
              <img
                src="/assets/havetutorials.png"
                style={{ width: '198px', height: '130px' }}
              />
              <span
                style={{
                  fontSize: '22px',
                  margin: '5px 0',
                }}
              >
                Usability
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: '14px',
                  textAlign: 'center',
                }}
              >
                Provide intuitive and succinct natural language commands that
                enable specifying a coordination through a natural language
                sentence.
              </span>
            </div>
            <div
              style={{
                width: '280px',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}
            >
              <img
                src="/assets/multipleviews.png"
                style={{ width: '198px', height: '130px' }}
              />
              <span
                style={{
                  fontSize: '22px',
                  textAlign: 'center',
                  margin: '5px 0',
                }}
              >
                Compatibility
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: '14px',
                  textAlign: 'center',
                }}
              >
                Integrate easily with third-party visualization tools. Enhance
                expressiveness with more possibilities and usability with users' previous knowledge.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '160px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <a
          href="/editor"
          style={{
            display: 'inline-flex',
            backgroundColor: '#2F54EB',
            width: '136px',
            height: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            borderRadius: '20px',
          }}
        >
          Try Online
        </a>
      </div>
      <div
        style={{
          width: '100%',
          height: '200px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#030852',
        }}
      >
        {/* <span>
            <p style={{ fontSize: '1.25rem' }}>Contact Us</p>
            <p>Tel:</p>
            <p>E-Mail:</p>
            <p>Address:</p>
          </span>
          <span>
            <p style={{ fontSize: '1.25rem' }}>Abouts</p>
            <p>Video</p>
            <p>Researches</p>
            <p>Paper</p>
          </span> */}
        <span></span>
        {/* <span style={{ fontSize: '2rem', fontWeight: 600 }}>Nebula</span> */}
      </div>
    </div>
  )
}

export default Homepage
