
type Props = {
    name: string,
    value: string
}

const Title = ({ name, value }: Props) => {
    return (
        <h1 className="w-full font-serif text-4xl font-semibold capitalize break-words ">
            {name}: <span className="underline decoration-accent ">{value}</span>
        </h1>
    )
}

export default Title