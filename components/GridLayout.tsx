
const GridLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 ">
            {children}
        </div>
    )
}

export default GridLayout