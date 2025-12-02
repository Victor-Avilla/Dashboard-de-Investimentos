

function Cards({ Icon, iconColor, bgIconColor, title, data, value, subtitleColor
}) {
    return (
        <section className="flex justify-center items-center">

            <div className="flex items-center justify-center w-48 max-w-md h-20 max-h-64 p-3 rounded-md bg-slate-900 border border-slate-800 text-slate-100
            lg:w-52">
                <Icon className={`my-auto rounded-md p-0.5 ${iconColor} ${bgIconColor}`} />

                <div className="flex flex-col flex-1 items-center mr-5">

                    <h1 className="text-sm text-center text-slate-500">{title}</h1>
                    <h3 className="font-semibold w-[100px] text-center">{data}</h3>
                    <h1 className={`text-sm ${subtitleColor}`}>{value}</h1>

                </div>

            </div>
        </section>
    )
}
export default Cards

