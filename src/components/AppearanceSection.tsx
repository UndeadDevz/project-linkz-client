import { useStyleContext } from '../context/StyleContext'
import { SizeComponent } from './SizeComponent'
import { BorderWidth } from './BorderWidthComponent'
import { BorderRadiusComponent } from './BorderRadiusComponent'
import { TextAlign } from './TextAlign'

export const AppearanceSection = () => {
  const { appearance, changeAppearance } = useStyleContext()

  return (
    <div className=' p-2 flex flex-col gap-4 max-w-[700px] w-full relative  h-full'>
      <article className='bg-white rounded-xl shadow-lg '>
        <h2> title appearence</h2>
        <label>
          font color{' '}
          <input
            type='color'
            value={appearance.titleStyle.color}
            onChange={(e) =>
              changeAppearance('titleStyle', 'color', e.target.value)
            }
          />
        </label>
        <label>
          font
          <select>
            <option>1</option>
          </select>
        </label>
        <label>
          font style
          <select
            value={appearance.titleStyle.fontStyle}
            onChange={(e) =>
              changeAppearance('titleStyle', 'fontStyle', e.target.value)
            }
          >
            <option value={'italic'}>italic</option>
            <option value={'normal'}>normal</option>
            <option value={'oblique'}>oblique</option>
          </select>
        </label>
        <label>
          font weight
          <select
            value={appearance.titleStyle.fontWeight}
            onChange={(e) =>
              changeAppearance('titleStyle', 'fontWeight', e.target.value)
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
        </label>
        <label>
          font size
          <SizeComponent
            value={appearance.titleStyle.fontSize}
            onChange={(value) =>
              changeAppearance('titleStyle', 'fontSize', value)
            }
          />
        </label>
      </article>
      <article className='bg-white rounded-xl shadow-lg '>
        <h2> header appearence</h2>
        <label>
          font color{' '}
          <input
            type='color'
            value={appearance.headerStyle.color}
            onChange={(e) =>
              changeAppearance('headerStyle', 'color', e.target.value)
            }
          />
        </label>
        <label>
          font
          <select>
            <option>1</option>
          </select>
        </label>
        <label>
          font style
          <select
            value={appearance.headerStyle.fontStyle}
            onChange={(e) =>
              changeAppearance('headerStyle', 'fontStyle', e.target.value)
            }
          >
            <option value={'italic'}>italic</option>
            <option value={'normal'}>normal</option>
            <option value={'oblique'}>oblique</option>
          </select>
        </label>
        <label>
          font weight
          <select
            value={appearance.headerStyle.fontWeight}
            onChange={(e) =>
              changeAppearance('headerStyle', 'fontWeight', e.target.value)
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
        </label>
        <label>
          font size
          <SizeComponent
            value={appearance.headerStyle.fontSize}
            onChange={(value) =>
              changeAppearance('headerStyle', 'fontSize', value)
            }
          />
        </label>
        <label>
          Align
          <TextAlign
            value={appearance.headerStyle.textAlign}
            onChange={(value) =>
              changeAppearance('headerStyle', 'textAlign', value)
            }
          />
        </label>
      </article>{' '}
      <article className='bg-white rounded-xl shadow-lg '>
        <h2> link appearence</h2>
        <label>
          Background{' '}
          <input
            type='color'
            value={appearance.linkStyle.backgroundColor}
            onChange={(e) =>
              changeAppearance('linkStyle', 'backgroundColor', e.target.value)
            }
          />
        </label>
        <label>
          border color{' '}
          <input
            type='color'
            value={appearance.linkStyle.borderColor}
            onChange={(e) =>
              changeAppearance('linkStyle', 'borderColor', e.target.value)
            }
          />
        </label>
        <label>
          border width
          <BorderWidth
            value={appearance.linkStyle.borderWidth}
            onChange={(value) =>
              changeAppearance('linkStyle', 'borderWidth', value)
            }
          />
        </label>
        <label>
          border radius
          <BorderRadiusComponent
            value={appearance.linkStyle.borderRadius}
            onChange={(value) =>
              changeAppearance('linkStyle', 'borderRadius', value)
            }
          />
        </label>
        <label>
          font color
          <input
            type='color'
            value={appearance.linkStyle.color}
            onChange={(e) =>
              changeAppearance('linkStyle', 'color', e.target.value)
            }
          />
        </label>
        <label>
          font family
          <select>
            <option>1</option>
          </select>
        </label>
        <label>
          font style
          <select
            value={appearance.linkStyle.fontStyle}
            onChange={(e) =>
              changeAppearance('linkStyle', 'fontStyle', e.target.value)
            }
          >
            <option value={'italic'}>italic</option>
            <option value={'normal'}>normal</option>
            <option value={'oblique'}>oblique</option>
          </select>
        </label>
        <label>
          font weight
          <select
            value={appearance.linkStyle.fontWeight}
            onChange={(e) =>
              changeAppearance('linkStyle', 'fontWeight', e.target.value)
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
        </label>
        <label>
          font size
          <SizeComponent
            value={appearance.linkStyle.fontSize}
            onChange={(value) =>
              changeAppearance('linkStyle', 'fontSize', value)
            }
          />
        </label>
      </article>
    </div>
  )
}
