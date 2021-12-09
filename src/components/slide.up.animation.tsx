import React, { useEffect, useRef } from 'react'
import '../styles/component.styles/slide.up.animation.scss'

interface Props {
    children: React.ReactNode
    duration?: string
    delay?: string
    slideFrom?: number
}

export function SlideUpAnimation({
    children,
    delay = '0s',
    duration = '0.5s',
    slideFrom = 300
}: Props) {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const contentWrapperRef = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (
                entries: IntersectionObserverEntry[],
                observer: IntersectionObserver
            ) => {
                const wrapper = entries[0]
                if (
                    wrapperRef.current &&
                    contentWrapperRef.current &&
                    wrapper.isIntersecting
                ) {
                    contentWrapperRef.current.className += ' slide-into-view'
                    wrapperRef.current && observer.unobserve(wrapperRef.current)
                }
            }
        )
        if (wrapperRef.current) {
            observer.observe(wrapperRef.current)
        }
    }, [])

    return (
        <div
            ref={(_ref) => (wrapperRef.current = _ref)}
            className="animation-wrapper"
        >
            <div
                ref={(_ref) => (contentWrapperRef.current = _ref)}
                style={{
                    transitionDelay: delay,
                    transitionDuration: duration,
                    transform: `translateY(${slideFrom}px)`
                }}
                className="content-wrapper"
            >
                {children}
            </div>
        </div>
    )
}
