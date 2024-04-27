import DateTime from 'components/common/base/DateTime'
import CoverImage from 'components/common/base/Images'
import PostTitle from 'components/post/PostTitle'

type Props = {
  title: string
  category: string
  coverImage: string
  date: string
  caption: string
}

const PostHeader = ({ title, category, coverImage, date, caption }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center mb-8 justify-center md:justify-start">
        <div className="font-bold">{category}</div>
        <div className="px-2">|</div>
        <div>
          <DateTime dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <figure>
          <CoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    </>
  )
}

export default PostHeader
