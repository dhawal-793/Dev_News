type Props = {
    width?: string
    height?: string
    opacity?: string
    rounded?: string
}

const Paragraph = ({ width = "w-full", height = "h-3 sm:h-5", opacity = "opacity-30", rounded = "rounded-md" }: Props) => {
    return (
        <div className={`bg-loading-light/70 dark:bg-loading-dark  ${width} ${height} ${opacity} ${rounded}`} />
    )
}

export default Paragraph;