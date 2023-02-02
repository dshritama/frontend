import React from "react";

const Grid = (props) => {

    const Pictures = [  <img src = "https://ctl.s6img.com/society6/img/5Llzinl680D9y-gH7vyY_nu1Zog/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/2c5ecf8cdd6b454486cdcb39fb0f3be6/~~/this-must-be-the-place5894157-prints.jpg?attempt=0" className="thumbnail" alt=""/>,
    
                        <img src = "https://ctl.s6img.com/society6/img/yHzXIsqZ8BNRF4gK1JKI7qdea-8/w_700/wood-wall-art/3x3/front/~artwork,bg_FFFFFFFF,fw_2601,fh_2601,iw_2601,ih_2601/s6-original-art-uploads/society6/uploads/misc/3421e550060a40a7955f8d0cddc71b93/~~/colorful-branching-out-05-wood-wall-art.jpg?attempt=0" className="thumbnail" alt=""/>,
                        
                        <img src = "https://ctl.s6img.com/society6/img/uB-79mcufR4UTym5VPTJTmACzm0/w_700/framed-canvas/8x12/black/sweep/~artwork,fw_2400,fh_3600,fx_-214,iw_2828,ih_3600/s6-original-art-uploads/society6/uploads/misc/1a6eae6765ef4d468218e46e05589598/~~/basil-the-cat7248061-framed-canvas.jpg?attempt=0" className="thumbnail" alt="" />,
                        
                        <img src = "https://ctl.s6img.com/society6/img/GCpw5a70n57DmI6w_hmf9wvSLEk/w_700/wood-wall-art/3x3/front/~artwork,bg_FFFFFFFF,fw_2602,fh_2601,fx_-10,fy_-364,iw_2600,ih_3641/s6-original-art-uploads/society6/uploads/misc/ea4a9bfbf1d54bf595503344ec851a68/~~/soft-shapes-i-wood-wall-art.jpg?attempt=0" className="thumbnail" alt=""/>,
                        
                        <img src = "https://ctl.s6img.com/society6/img/fhNXgkpiChIhG86CkTo5PFc7s0Q/w_700/wood-wall-art/3x3/front/~artwork,bg_FFFFFFFF,fw_2601,fh_2601,fy_-650,iw_2601,ih_3901/s6-original-art-uploads/society6/uploads/misc/081d879c01374641aabf9632df4436c1/~~/mid-century-modern-pattern-no1-concrete-and-wood-wood-wall-art.jpg?attempt=0" className="thumbnail" alt=""/>,
                        
                        
                        <img src = "https://ctl.s6img.com/society6/img/ivn-3C5DnwhsQuk9_oQw50Q8ouk/w_700/wood-wall-art/3x3/front/~artwork,bg_FFFFFFFF,fw_2602,fh_2602,fy_-432,iw_2600,ih_3468/s6-original-art-uploads/society6/uploads/misc/bc7eda3f106c4e9cb5012e8017f3cd7c/~~/mid-century-modern-no28-woodblock-wood-wall-art.jpg?attempt=0" className="thumbnail" alt="" />,
                        
                        
                        <img src = "https://ctl.s6img.com/society6/img/8eIIoDZrkcpNGMZQWrLU7BdejfM/w_700/wood-wall-art/3x3/front/~artwork,bg_FFFFFFFF,fw_2601,fh_2601,iw_2601,ih_2601/s6-original-art-uploads/society6/uploads/misc/002efe50528649ae8c14b5ab18858211/~~/color-block-lines-v-wood-wall-art.jpg?attempt=0" className="thumbnail" alt=""/>,
                        
                        <img src = "https://ctl.s6img.com/society6/img/YUSymLd-iAGj7HOUCSvrQ2E7gfM/w_700/wood-wall-art/3x3/front/~artwork,bg_FFFFFFFF,fw_2601,fh_2601,iw_2601,ih_2601/s6-original-art-uploads/society6/uploads/misc/0f7c4d4768f144a4b8c116cbb19c84ae/~~/abstract-wavy-stripes-lxiii-wood-wall-art.jpg?attempt=0" className="thumbnail" alt="" />,
                        
                        
                        <img src = "https://ctl.s6img.com/society6/img/SyK5HNghop3swyLms-Nss7efau8/w_700/framed-canvas/12x8/black/sweep/~artwork,fw_3600,fh_2400,fy_-594,iw_3600,ih_3588/s6-original-art-uploads/society6/uploads/misc/32ac4372fee84f40b8baec8b4fa7f8d9/~~/late-summer-still-life-framed-canvas.jpg?attempt=0" className="thumbnail" alt="" />,
                        

                        <img src = "https://ctl.s6img.com/society6/img/doS1jGDnkY2vrcc1b9BSY9cOiA8/w_700/framed-canvas/8x12/maple/sweep/~artwork,fw_2400,fh_3600,fx_-89,iw_2577,ih_3600/s6-original-art-uploads/society6/uploads/misc/5ca2981b83d149e7b7b117093f12bfdc/~~/gouache-2-still-life-flowers-in-a-vase-with-striped-wallpaper-framed-canvas.jpg?attempt=0" className="thumbnail" alt="" />,
                        

                        <img src = "https://ctl.s6img.com/society6/img/xlOM3j57LxkxvS6Hajem1c4uWUs/w_700/wood-wall-art/3x3/front/~artwork,bg_FFFFFFFF,fw_2601,fh_2601,fy_-532,iw_2601,ih_3664/s6-original-art-uploads/society6/uploads/misc/976339c7d35149708dcdd4d48bc1403d/~~/abstract-flow2850235-wood-wall-art.jpg?attempt=0" className="thumbnail" alt="" />,
                        
                        
                        <img src = "https://ctl.s6img.com/society6/img/VjYDehIg1gK0QQUGJ8WsWoU8ddk/w_700/wood-wall-art/3x3/front/~artwork,bg_FFFFFFFF,fw_2602,fh_2602,fx_-89,fy_-120,iw_3392,ih_3392/s6-original-art-uploads/society6/uploads/misc/ae6b6f99fbe34020a03ac704a9bdbdb8/~~/italy-coast-houses-minimal-abstract-painting-wood-wall-art.jpg?attempt=0" className="thumbnail" alt="" />,
                        
                                            
                    ];

    return (
        <>
            <div className="row column">
                <h3>Prints We Love</h3>
            </div>

            
            <div className="row medium-up-3 large-up-4">
                    
                {
                    Pictures.map((e) => {
                        return (
                            <div className="column">{e}</div>
                        )
                    })
                }
                
            </div>
        </>
    )
}

export default Grid