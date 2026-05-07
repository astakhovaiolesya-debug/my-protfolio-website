import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer id="contact" className="bg-accent text-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-4 pt-10 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-24">
            <div className="space-y-3">
              <p className="editorial-subhead text-muted">Email</p>
              <a
                href="mailto:astakhovaiolesya@gmail.com"
                className="editorial-kicker text-paper/90 transition-colors duration-200 hover:text-paper"
              >
                astakhovaiolesya@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              <p className="editorial-subhead text-muted">Phone number</p>
              <p className="editorial-kicker text-paper/90">+353 83 155 8137</p>
            </div>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-12">
            <div className="space-y-3">
              <Link to="/about" className="block editorial-kicker text-paper/90 hover:text-paper">
                About
              </Link>
              <Link to="/works" className="block editorial-kicker text-paper/90 hover:text-paper">
                Works
              </Link>
              <a
                href="https://drive.google.com/file/d/1qDHxu3d8LmdO2OtaCQ-BU-WnIfjSZX4d/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="block editorial-kicker text-paper/90 underline decoration-paper/60 decoration-1 underline-offset-2 hover:text-paper"
              >
                Resume
              </a>
              <a href="#contact" className="block editorial-kicker text-paper/90 hover:text-paper">
                Contact
              </a>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/olesia-astakhova-a215442a8/"
                target="_blank"
                rel="noreferrer"
                className="block editorial-kicker text-paper/90 hover:text-paper"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block editorial-kicker text-paper/90 hover:text-paper"
                onClick={(e) => e.preventDefault()}
              >
                Instagram
              </a>
              <a
                href="https://www.behance.net/astakhovaolesia"
                target="_blank"
                rel="noreferrer"
                className="block editorial-kicker text-paper/90 hover:text-paper"
              >
                Behance
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between">
          <a
            href="mailto:astakhovaiolesya@gmail.com"
            className="font-serif text-[44px] font-semibold leading-[1.06] text-paper transition-opacity duration-200 hover:opacity-85 sm:text-[56px] lg:text-[72px] lg:leading-[78px]"
          >
            Contact
          </a>
          <img src="/images/logo-footer.svg" alt="" className="size-[88px] sm:size-[105px]" />
        </div>
      </div>
    </footer>
  )
}

