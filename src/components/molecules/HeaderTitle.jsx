

export default function HeaderTitle({title, style}) {
    return(
        <>
            <div className="my-1 text-warning fw-bold fs-1" style={style}>{title}</div>
        </>
    )
}