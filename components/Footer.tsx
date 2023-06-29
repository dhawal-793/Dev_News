import { HeartIcon } from "@heroicons/react/24/solid"

const Footer = () => {
    const year = new Date().getFullYear().toString()
    return (
        <footer className="w-full p-5 border-t-2 border-light-primary dark:border-dark-primary text-dark-primary dark:text-light-primary ">
            <div className="flex flex-col items-center justify-between max-w-6xl gap-3 mx-auto">
                <small className="text-[0.6rem] xs:text-xs">Copyright &copy; {year} <a href="https://github.com/dhawal-793/Dev_News" target="_blank" className="text-accent">DevNews</a>
                </small>
                <small className="text-[0.7rem] xs:text-sm flex">
                    Made with <HeartIcon className="w-4 mx-1 text-cancel h4" /> by <a href="https://dev-folio-793.vercel.app" target="_blank" className="ml-1 text-accent">
                        Dhawal Vijayvargiya
                    </a>
                </small>
            </div>
        </footer>
    )
}

export default Footer