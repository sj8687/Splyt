

const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
    return <div className="general-title">
        <div style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            borderColor: borderColor
        }} className={`${className} border-[.5vw] text-nowrap opacity-100`}>
            <div className="md:px-14 px-3 md:p-0 pt-3 pb-5" style={{
                backgroundColor: bg
            }}>
                <h2 style={{
                    color: color
                }}>{title}</h2>
            </div>
        </div>
    </div>
}

export default ClipPathTitle