//common style for all case studies
import styled from "@emotion/styled";

function justifyContent(props) {
    if(props.justifyCenter) return 'center';
    if(props.spaceAround) return 'space-around';
    if(props.spaceBetween) return 'space-between';
    return 'flex-start'
}

function alignItems(props) {
    if(props.alignCenter) return 'center';
    if(props.alignBottom) return 'flex-end';
    return 'flex-start'
}

export const Container = styled.div` flex:1 `;

export const CaseStudy = styled.div`
    max-width: 1000px;
    margin: auto;
    border: 1px solid rgba(0,0,0,0.12);
    box-shadow: 0px 8px 8px rgba(0,0,0,0.2);
    margin-bottom: 32px;
    font-family: 'Roboto', san-serif;
`

export const Banner = styled.img`
    width: 100%;
`

export const ContentContainer = styled.div`
    margin: 32px;
`
export const Flexbox = styled.div`
    display: flex;
    width: 100%;
    flex-directions: ${props => (props.columns ? 'columns' : 'rows')};
    justify-content: ${props => (justifyContent(props))};
    align-items: ${props => (alignItems(props))};
    flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
`

