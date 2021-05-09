import Image from 'next/image'

const name = 'Prasad Phule'
export const siteTitle = 'Personal Website'

export default function Layout({ children, home }) {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-4 text-center">
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={name}
              className="d-block mx-lg-auto img-fluid img-round rounded-circle"
            />
          </div>
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold lh-1 mb-3">Hey, I'm Prasad Phule.</h1>
            <p className="lead">
              I'm a freelance developer, code teacher, consultant and open source contributer.
              Find me on Stackoverflow and GitHub.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-outline-primary btn-lg px-4">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}