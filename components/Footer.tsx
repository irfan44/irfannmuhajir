import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

import ContactButton from 'components/common/ContactButton'
import SocialLinks from 'components/common/SocialMedia'
import Container from 'components/layouts/Container'
import Menu from 'components/navigation/ListMenu'

const Footer = () => {
  return (
    <Container>
      <div className="mb-6 mt-32 flex rounded-3xl py-12">
        <div className="mx-auto flex-1 text-center md:mx-0 md:text-left">
          <ul className="flex list-none flex-col space-y-1 md:hidden">
            <Menu />
          </ul>
          <div className="my-4 md:pr-8">
            <Link
              href="/"
              className="font-sans text-2xl font-bold leading-tight tracking-tighter text-black dark:text-white md:text-4xl"
            >
              inm
            </Link>
          </div>
          <div className="mb-8 flex justify-center space-x-4 md:justify-start">
            <SocialLinks />
          </div>
          <div className="mb-4 flex justify-center md:justify-start">
            <ContactButton />
          </div>
          <div>
            <p className="text-sm">
              © {new Date().getFullYear()} Irfan Nurghiffari Muhajir
            </p>
            <p className="text-sm">With 😻 using NextJS & Tailwind CSS</p>
          </div>
          <div className="mt-6 flex justify-center md:hidden">
            <a
              href="https://github.com/irfan44/irfannm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm"
              title="Source code"
            >
              <FaGithub className="mr-2 text-xl text-black dark:text-white" />
              Source code
            </a>
          </div>
        </div>
        <div className="hidden flex-col justify-between md:flex">
          <ul className="flex w-fit flex-col">
            <Menu />
          </ul>
          <a
            href="https://github.com/irfan44/irfannm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm"
            title="Source code"
          >
            <FaGithub className="mr-2 text-xl text-black dark:text-white" />
            Source code
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Footer
