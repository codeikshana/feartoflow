import { partners } from "../data"

const Partners = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-[40px] py-[40px] bg-gray4">
            <span className="text-light font-bold md:text-[54px] text-[30px]  md:leading-[60px]">THINK. CODE. IMPACT.</span>
            {/* <div className="w-full flex md:flex-row flex-col items-center justify-center gap-[72px]">
                {partners.map((item, index) => (
                    <img src={item} alt={`partner${index + 1}`} key={index} />
                ))}
            </div> */}
        </div>
    )
}

export default Partners