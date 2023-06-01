import { HeartIcon } from "@heroicons/react/24/solid"

const Footer = () => {
    const year = new Date().getFullYear().toString()
    return (
        <footer className="w-full p-5 border-t-2 border-light-primary dark:border-dark-primary
        text-dark-primary dark:text-light-primary ">
            <div className="max-w-6xl mx-auto flex flex-col justify-between items-center gap-3">
                <small className="text-[0.6rem] xs:text-xs">Copyright &copy; {year} <a href="https://github.com/dhawal-793/Dev_News" target="_blank" className="text-accent">DevNews</a>
                </small>
                <small className="text-[0.7rem] xs:text-sm flex">
                    Made with <HeartIcon className="mx-1 text-cancel w-4 h4" /> by <a href="https://dhawal-793-portfolio.onrender.com" target="_blank" className="ml-1 text-accent">
                        Dhawal Vijayvargiya
                    </a>
                </small>
            </div>
        </footer>
    )
}

export default Footer