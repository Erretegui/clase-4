export default function Childrentest({children,  srcImg}) {
    return (
      <>
        <h1>{children}</h1>
        <img  src={srcImg}  />
      </>
    )
}