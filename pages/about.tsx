import Image from 'next/image';
import Link from 'next/link';
import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';
import Layout from 'components/layouts/Layout';

const About = () => {
  const pageMeta = {
    title: 'About',
    description: 'About Irfan Nurghiffari Muhajir',
    ogImage: '/assets/images/irfan.jpeg',
  };
  return (
    <>
      <Meta data={pageMeta} />
      <Layout>
        <Container>
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="space-y-12">
              <div>
                <h1>About</h1>
              </div>
              <div>
                <div className="flex justify-center mb-12">
                  <Image
                    className="rounded-full"
                    alt="Irfan Nurghiffari Muhajir"
                    src="/assets/images/irfan.jpeg"
                    width="224"
                    height="224"
                  />
                </div>
                <div className="space-y-6">
                  <p>
                    <strong>Hi everyone!</strong> I&apos;m{' '}
                    <strong>Irfan Nurghiffari Muhajir</strong>, you can call me{' '}
                    <strong>Irfan</strong>. I grew up in Tangerang, which is one
                    of the satellite cities of Jakarta. Currently I&apos;m a
                    Software Engineering student at Universitas Pendidikan
                    Indonesia. I started my study in 2019 and I&apos;m currently
                    in my last year. But, i was an Industrial Engineering
                    student in 2018 before i decided to move.
                  </p>
                  <p>
                    I focus much of my time in collage to learn about software
                    engineering. I love exploring stuff about technology.
                    I&apos;m part of Red Hat&apos;s team as a Class Assistant &
                    Help desk in{' '}
                    <Link href="https://digitalent.kominfo.go.id/">
                      <a target="_blank" rel="noopener noreferrer" className="font-bold underline">
                        Digital Talent Scholarship
                      </a>
                    </Link>{' '}
                    held by Kementrian Kominfo for 2 years. I&apos;m also part
                    of{' '}
                    <Link href="https://ramaniya.id/">
                      <a target="_blank" rel="noopener noreferrer" className="font-bold underline">Ramaniya</a>
                    </Link>{' '}
                    as a freelance Information Technology Staff in 2021. I also
                    took part in{' '}
                    <Link href="https://www.anakbangsabisa.org/generasi-gigih/">
                      <a target="_blank" rel="noopener noreferrer" className="font-bold underline">Generasi Gigih</a>
                    </Link>{' '}
                    held by Yayasan Anak Bangsa Bisa & GoTo Group at Front-end
                    Engineering Track.
                  </p>
                  <p>
                    Outside of tech, I learn a lot about finance. I&apos;ve been
                    part of several investors community and been investing at
                    mutual funds & stocks.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h2>Contact</h2>
              </div>
              <p className="mb-2">You can contact me here :</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>
                  Mail :{' '}
                  <Link href="mailto:irfannmuhajir@gmail.com">
                    <a target="_blank" rel="noopener noreferrer" className="underline">irfannmuhajir@gmail.com</a>
                  </Link>
                </li>
                <li>
                  Github :{' '}
                  <Link href="https://github.com/irfan44">
                    <a target="_blank" rel="noopener noreferrer" className="underline">https://github.com/irfan44</a>
                  </Link>
                </li>
                <li>
                  Gitlab :{' '}
                  <Link href="https://gitlab.com/irfannm">
                    <a target="_blank" rel="noopener noreferrer" className="underline">https://gitlab.com/irfannm</a>
                  </Link>{' '}
                </li>
                <li>
                  LinkedIn :{' '}
                  <Link href="https://www.linkedin.com/in/irfannm/">
                    <a target="_blank" rel="noopener noreferrer" className="underline">
                      https://linkedin.com/in/irfannm/
                    </a>
                  </Link>
                </li>
                <li>
                  Instagram :{' '}
                  <Link href="https://www.instagram.com/irfannm44/">
                    <a target="_blank" rel="noopener noreferrer" className="underline">
                      https://instagram.com/irfannm44/
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-6">
                <h2>Curriculum Vitae</h2>
              </div>
              <div>
                <p>
                  You can see and download my latest CV{' '}
                  <Link href="https://drive.google.com/file/d/14SkpfAltg0GS4qfomrwZH3g8fpGxDulX/view?usp=sharing">
                    <a target="_blank" rel="noopener noreferrer" className="underline font-bold">here</a>
                  </Link>{' '}
                  (last updated: April 2022)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default About;
