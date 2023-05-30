type Props = {
    width?: string
    height?: string
    opacity?: string
    rounded?: string
}

const Line = ({ width = "w-full", height = "h-5", opacity = "opacity-30", rounded = "rounded-sm" }: Props) => {
    return (
        <div className={`bg-loading-light/70 dark:bg-loading-dark  ${width} ${height} ${opacity} ${rounded}`} />
    )
}

export default Line;