import { HeartIcon } from "@heroicons/react/24/solid"

const Footer = () => {
    const year = new Date().getFullYear().toString()
    return (
        <footer className="w-full p-5  border-t-2 border-light-primary dark:border-dark-primary
        text-dark-primary dark:text-light-primary ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="text-xs">Copyright &copy; {year} <span className="text-accent">DevNews</span>
                </div>
                <div className="text-sm flex">
                    Made with <HeartIcon className="mx-1 text-cancel w-4 h4" /> by <a href="https://dhawal-793-portfolio.onrender.com" target="_blank" className="ml-1 text-accent">
                        Dhawal Vijayvargiya
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer