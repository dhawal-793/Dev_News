type Props = {
    width?: string
    opacity?: string
    rounded?: string
}

const Box = ({ width = "w-full", opacity = "opacity-70", rounded = "rounded-lg" }: Props) => {
    return (
        <div className={`bg-loading-light/50 aspect-video dark:bg-loading-dark  ${width}  ${opacity} ${rounded}`} />
    )
}

export default Box;