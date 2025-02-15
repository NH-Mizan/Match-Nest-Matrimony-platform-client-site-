import { CirclesWithBar } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <CirclesWithBar
                height="80"
                width="80"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    );
};

export default Loading;