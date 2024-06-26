import ReactMarkdown from "react-markdown";
import Blogs from "../Blogs/ShortBlogs";
import ContactSection from "../GetInTouch/GIT";
function BlogView() {
  return (
    <>
      <div className="w-2/3 flex justify-center flex-col mx-auto my-5">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/901/431/645/5bd146f8b3e16-wallpaper-preview.jpg"
          alt=""
        />
        <h1 className="text-center text-4xl my-5">This is Title</h1>
        <p className="text-base font-serif">
          <ReactMarkdown>
            [Retool](https://retool.com) Man, Static websites are now used to
            bootstrap lots of websites and are becoming the basis for a variety
            of tools that even influence both web designers and developers
            influence both web designers and developers. **all** of this using
            made using HTML tags Hello # heading2 *Italic* # Heading 1
            [Link](http://a.com) Blockquote 1. Happy 2. Sad `Inline code` HII
            **Yeh Text Bold Hai**. List - List - List ***hello
          </ReactMarkdown>
        </p>
      </div>
      <ContactSection />
    </>
  );
}

export default BlogView;
