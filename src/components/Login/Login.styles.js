import styled from 'styled-components'

export const Container = styled.section`
    overflow: hidden;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    text-align: center;
`

export const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    positiion: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    background: url("/images/login-background.jpg") center/cover no-repeat;
`

export const CTA = styled.div`
    width: 100%;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CTALogoOne = styled.figure`
    max-width: 600px;
    width: 100%;
    margin-bottom: 12px;
    min-height: 1px;
`
