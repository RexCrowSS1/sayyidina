import profile480 from '../assets/myprofile-480.avif';
import profile860 from '../assets/myprofile-860.avif';
import nonStudentProfile480 from '../assets/nonstudent-profile-480.avif';
import nonStudentProfile860 from '../assets/nonstudent-profile-860.avif';

const profileSizes = '(max-width: 620px) calc(100vw - 2.8rem), (max-width: 1080px) 430px, 380px';

const heroContent = {
  student: {
    eyebrow: 'Personal Portfolio',
    headline: 'Computer Science Student / AI & Web Developer Enthusiast',
    description:
      'I enjoy building sharp, practical web experiences where computer science, AI ideas, and expressive interfaces meet. The goal is simple: make digital projects feel useful, fast, and unmistakably personal.',
    tags: ['React', 'AI Tools', 'Frontend', 'Creative Code'],
    note: 'Focused on learning, building, and shipping small digital experiments with taste and discipline.',
    profile: {
      src: profile860,
      srcSet: `${profile480} 480w, ${profile860} 860w`,
      width: 860,
      height: 1146,
      alt: 'Portrait of Sayyidina Anshari Ahmad',
      className: 'profile-image-student',
    },
  },
  nonstud: {
    eyebrow: 'Beyond The Classroom',
    headline: 'Collaborator / Creative Builder / Organization Enthusiast',
    description:
      'I grow through teamwork, organizations, and hands-on initiatives. I enjoy connecting people and ideas, taking responsibility, and turning shared goals into meaningful results.',
    tags: ['Communication', 'Teamwork', 'Leadership', 'Adaptability'],
    note: 'Focused on contributing with empathy, taking initiative, and growing through every collaboration.',
    profile: {
      src: nonStudentProfile860,
      srcSet: `${nonStudentProfile480} 480w, ${nonStudentProfile860} 860w`,
      width: 860,
      height: 1074,
      alt: 'Sayyidina Anshari Ahmad performing guitar on stage',
      className: 'profile-image-non-student',
    },
  },
};

function preloadProfile(profile) {
  if (typeof Image === 'undefined') return;

  const image = new Image();
  image.sizes = profileSizes;
  image.srcset = profile.srcSet;
  image.src = profile.src;
}

export default function Hero({
  onContact,
  onExperience,
  studentMode,
  onToggleStudentMode,
}) {
  const content = studentMode ? heroContent.student : heroContent.nonstud;
  const alternateProfile = studentMode ? heroContent.nonstud.profile : heroContent.student.profile;

  return (
    <section id="hero" className="hero-section">
      <div className="portfolio-container hero-grid">
        <div className="hero-copy">
          <div className="sticker sticker-signal">{content.eyebrow}</div>
          <div>
            <h1 className="hero-title">
              Sayyidina
              <span>Anshari Ahmad</span>
            </h1>
            <p className="hero-headline">{content.headline}</p>
            <p className="hero-description">{content.description}</p>
          </div>

          <div className="hero-actions">
            <button
              type="button"
              onClick={onExperience}
              className="btn-brutal"
              data-cursor
            >
              View Experience
            </button>
            <button
              type="button"
              onClick={onContact}
              className="btn-brutal btn-brutal-light"
              data-cursor
            >
              Contact Me
            </button>
          </div>

          <div className="hero-tags" aria-label="Focus areas">
            {content.tags.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <aside className="profile-block">
          <div className={`profile-frame${studentMode ? '' : ' is-non-student'}`}>
            <img
              src={content.profile.src}
              srcSet={content.profile.srcSet}
              sizes={profileSizes}
              width={content.profile.width}
              height={content.profile.height}
              alt={content.profile.alt}
              className={`profile-image ${content.profile.className}`}
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="profile-meta">
            <span>Based in Indonesia</span>
            <button
              type="button"
              className={`student-mode-toggle${studentMode ? ' is-on' : ''}`}
              onClick={onToggleStudentMode}
              onPointerEnter={() => preloadProfile(alternateProfile)}
              onFocus={() => preloadProfile(alternateProfile)}
              aria-pressed={studentMode}
              aria-label={`Turn student mode ${studentMode ? 'off' : 'on'}`}
              data-cursor
            >
              <span className="student-mode-label">Student mode</span>
              <span className="student-mode-switch" aria-hidden="true">
                <span className="student-mode-knob" />
              </span>
              <span className="student-mode-state">{studentMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>
          <div className="profile-note">
            <span className="profile-note-index">01</span>
            <p>{content.note}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
