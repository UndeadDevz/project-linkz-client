import { useStyleContext } from "../context/StyleContext";
import { SizeComponent } from "./styleComponents/SizeComponent";
import { BorderWidth } from "./styleComponents/BorderWidthComponent";
import { BorderRadiusComponent } from "./styleComponents/BorderRadiusComponent";
import { TextAlign } from "./styleComponents/TextAlign";

export const AppearanceSection = () => {
  const { appearance, changeAppearance } = useStyleContext();

  return (
    <div className='p-2 flex flex-col gap-4 max-w-[900px] w-full relative  h-full font-nunito'>
      {/*
       *
       *
       *Title Appearence
       *
       *
       * */}
      <article className='bg-white rounded-xl shadow-lg p-2 flex flex-col gap-3'>
        <h2
          className='text-lg'
          onClick={() => console.log(appearance.headerStyle)}
        >
          Title appearence
        </h2>
        <div className='flex flex-row gap-6 items-center'>
          <label className='flex flex-row items-center gap-1'>
            Font color:
            <input
              type='color'
              value={appearance.titleStyle.fontColor}
              onChange={(e) =>
                changeAppearance("titleStyle", "fontColor", e.target.value)
              }
            />
          </label>
          <label className='flex flex-row items-center gap-1'>
            Font:
            <div className='select-container'>
              <select className='select-custom border w-24'>
                <option value='1'>Font 1</option>
                <option value='2'>Font 2</option>
                <option value='3'>Font 3</option>
              </select>
            </div>
          </label>
          <label className='flex flex-row items-center gap-1'>
            Font Family:
            <div className='select-container'>
              <select
                className='select-custom border w-24'
                value={appearance.titleStyle.fontFamily}
                onChange={(e) =>
                  changeAppearance("titleStyle", "fontFamily", e.target.value)
                }
              >
                <option value={"italic"}>italic</option>
                <option value={"normal"}>normal</option>
                <option value={"oblique"}>oblique</option>
              </select>
            </div>
          </label>
          <label className='flex flex-row items-center gap-1'>
            Font weight:
            <div className='select-container'>
              <select
                className='select-custom border w-28'
                value={appearance.titleStyle.fontWeight}
                onChange={(e) =>
                  changeAppearance("titleStyle", "fontWeight", e.target.value)
                }
              >
                <option value={100}>thin</option>
                <option value={200}>extralight</option>
                <option value={300}>light</option>
                <option value={400}>normal</option>
                <option value={500}>medium </option>
                <option value={600}>semibold </option>
                <option value={700}>bold</option>
                <option value={800}>extrabold </option>
                <option value={900}>black</option>
              </select>
            </div>
          </label>
        </div>
        <label className='flex flex-row'>
          <div className='pr-4'>Font size</div>
          <SizeComponent
            value={appearance.titleStyle.fontSize}
            onChange={(value) =>
              changeAppearance("titleStyle", "fontSize", value)
            }
          />
        </label>
      </article>
      {/*
       *
       *
       *Header Appearence
       *
       *
       * */}
      <article className='bg-white rounded-xl shadow-lg p-2 flex flex-col gap-3'>
        <h2>Header appearence</h2>
        <div className='flex flex-row gap-6 items-center'>
          <label className='flex flex-row items-center gap-1'>
            Font color:
            <input
              type='color'
              value={appearance.headerStyle.color}
              onChange={(e) =>
                changeAppearance("headerStyle", "fontColor", e.target.value)
              }
            />
          </label>
          <label className='flex flex-row items-center gap-1'>
            Font:
            <div className='select-container'>
              <select className='select-custom border w-24'>
                <option value='1'>Font 1</option>
                <option value='2'>Font 2</option>
                <option value='3'>Font 3</option>
              </select>
            </div>
          </label>
          {/*  <label className='flex flex-row items-center gap-1'>
            Font style:
            <div className='select-container'>
              <select
                className='select-custom border w-24'
                value={appearance.headerStyle.fontStyle}
                onChange={(e) =>
                  changeAppearance("headerStyle", "fontStyle", e.target.value)
                }
              >
                <option value={"italic"}>italic</option>
                <option value={"normal"}>normal</option>
                <option value={"oblique"}>oblique</option>
              </select>
            </div>
          </label> */}
          <label className='flex flex-row items-center gap-1'>
            Font weight:
            <div className='select-container'>
              <select
                className='select-custom border w-28'
                value={appearance.headerStyle.fontWeight}
                onChange={(e) =>
                  changeAppearance("headerStyle", "fontWeight", e.target.value)
                }
              >
                <option value={100}>thin</option>
                <option value={200}>extralight</option>
                <option value={300}>light</option>
                <option value={400}>normal</option>
                <option value={500}>medium </option>
                <option value={600}>semibold </option>
                <option value={700}>bold</option>
                <option value={800}>extrabold </option>
                <option value={900}>black</option>
              </select>
            </div>
          </label>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <label className='flex flex-row items-center gap-1'>
            Font size:
            <SizeComponent
              value={appearance.headerStyle.fontSize}
              onChange={(value) =>
                changeAppearance("headerStyle", "fontSize", value)
              }
            />
          </label>
          {/* <label className='flex flex-row items-center gap-1'>
            Align:
            <TextAlign
              value={appearance.headerStyle.textAlign}
              onChange={(value) =>
                changeAppearance("headerStyle", "textAlign", value)
              }
            />
          </label> */}
        </div>
      </article>{" "}
      {/*
       *
       *
       *Link Appearence
       *
       *
       * */}
      <article className='bg-white rounded-xl shadow-lg p-2 flex flex-col gap-3'>
        <h2 className='text-lg'>Link appearence</h2>
        <div className='flex flex-row gap-6 items-center'>
          <label className='flex flex-row items-center gap-1'>
            Background:
            <input
              type='color'
              value={appearance.linkStyle.background}
              onChange={(e) =>
                changeAppearance("linkStyle", "background", e.target.value)
              }
            />
          </label>
          <label className='flex flex-row items-center gap-1'>
            Border color:
            <input
              type='color'
              value={appearance.linkStyle.borderColor}
              onChange={(e) =>
                changeAppearance("linkStyle", "borderColor", e.target.value)
              }
            />
          </label>
          <label className='flex flex-row items-center gap-1'>
            Border width:
            <BorderWidth
              value={appearance.linkStyle.borderWidth}
              onChange={(value) =>
                changeAppearance("linkStyle", "borderWidth", value)
              }
            />
          </label>
          <label className='flex flex-row items-center gap-1'>
            Border radius:
            <BorderRadiusComponent
              value={appearance.linkStyle.borderRadius}
              onChange={(value) =>
                changeAppearance("linkStyle", "borderRadius", value)
              }
            />
          </label>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <label className='flex flex-row items-center gap-1'>
            Font color:
            <input
              type='color'
              value={appearance.linkStyle.fontColor}
              onChange={(e) =>
                changeAppearance("linkStyle", "fontColor", e.target.value)
              }
            />
          </label>
          <label className='flex flex-row items-center gap-1'>
            Font family:
            <div className='select-container'>
              <select className='select-custom border w-24'>
                <option value='1'>Font 1</option>
                <option value='2'>Font 2</option>
                <option value='3'>Font 3</option>
              </select>
            </div>
          </label>
          <label className='flex flex-row items-center gap-1'>
            Font style:
            <div className='select-container'>
              <select
                className='select-custom border w-24'
                value={appearance.linkStyle.fontStyle}
                onChange={(e) =>
                  changeAppearance("linkStyle", "fontStyle", e.target.value)
                }
              >
                <option value={"italic"}>italic</option>
                <option value={"normal"}>normal</option>
                <option value={"oblique"}>oblique</option>
              </select>
            </div>
          </label>
          <label className='flex flex-row items-center gap-1'>
            Font weight:
            <div className='select-container'>
              <select
                className='select-custom border w-28'
                value={appearance.linkStyle.fontWeight}
                onChange={(e) =>
                  changeAppearance("linkStyle", "fontWeight", e.target.value)
                }
              >
                <option value={100}>thin</option>
                <option value={200}>extralight</option>
                <option value={300}>light</option>
                <option value={400}>normal</option>
                <option value={500}>medium </option>
                <option value={600}>semibold </option>
                <option value={700}>bold</option>
                <option value={800}>extrabold </option>
                <option value={900}>black</option>
              </select>
            </div>
          </label>{" "}
        </div>
        <label className='flex flex-row items-center gap-1'>
          Font size:
          <SizeComponent
            value={appearance.linkStyle.fontSize}
            onChange={(value) =>
              changeAppearance("linkStyle", "fontSize", value)
            }
          />
        </label>
      </article>
    </div>
  );
};
