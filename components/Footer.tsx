import { HeartIcon } from "@heroicons/react/24/solid"

const Footer = () => {
    const year = new Date().getFullYear().toString()
    return (
        <footer className="w-full p-5  border-t-2 border-light-primary dark:border-dark-primary
        text-dark-primary dark:text-light-primary flex flex-col md:flex-row md:px-20 justify-between items-center gap-3">
            <div className="text-xs">Copyright &copy; {year} <span className="text-accent">DevNews</span>
            </div>
            <div className="text-sm flex">
                made with <HeartIcon className="mx-1 text-cancel w-4 h4" /> by <a href="https://dhawal-793-portfolio.onrender.com" target="_blank" className="ml-1 text-accent">
                    Dhawal Vijayvargiya
                </a>
            </div>
        </footer>
    )
}

export default Footer