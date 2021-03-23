import { RefObject } from 'react';
import { useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

function useObserver({
    callback,
    element,
}: {
    callback: (element: any) => void;
    element: RefObject<HTMLDivElement>;
}) {
    const current = element && element.current; // const observer = useRef<ResizeObserver>(null);

    let observeCurrent: any = null;

    useEffect(() => {
        // if we are already observing old element
        if (observeCurrent && current) {
            observeCurrent.unobserve(current);
        }
        const resizeObserverOrPolyfill = ResizeObserver; // observer.current = new resizeObserverOrPolyfill(callback);
        observeCurrent = new resizeObserverOrPolyfill(callback);

        observe();

        return () => {
            if (observeCurrent && current) {
                observeCurrent.unobserve(current);
            }
        };
    }, [current]);

    const observe = () => {
        if (current && observeCurrent) {
            observeCurrent.observe(current);
        }
    };
}

export default useObserver;

/* --------------------------------修改前----------------------------------- */
// import { RefObject } from 'react';
// import { useEffect, useRef } from 'react';
// import ResizeObserver from 'resize-observer-polyfill';

// function useObserver({
//     callback,
//     element,
// }: {
//     callback: (element: any) => void;
//     element: RefObject<HTMLDivElement>;
// }) {
//     const current = element && element.current;

//     const observer = useRef<ResizeObserver>(null);

//     useEffect(() => {
//         // if we are already observing old element
//         if (observer && observer.current && current) {
//             observer.current.unobserve(current);
//         }
//         const resizeObserverOrPolyfill = ResizeObserver;
//         observer.current = new resizeObserverOrPolyfill(callback);

//         observe();

//         return () => {
//             if (observer && observer.current && element && element.current) {
//                 observer.current.unobserve(element.current);
//             }
//         };
//     }, [current]);

//     const observe = () => {
//         if (element && element.current && observer.current) {
//             observer.current.observe(element.current);
//         }
//     };
// }

// export default useObserver;
