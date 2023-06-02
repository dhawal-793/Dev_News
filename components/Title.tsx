
type Props = {
    name: string,
    value: string
}

const Title = ({ name, value }: Props) => {
    return (
        <h1 className="capitalize w-fit font-serif font-semibold text-4xl">
            {name}: <span className="underline decoration-accent ">{value}</span>
        </h1>
    )
}

export default Title