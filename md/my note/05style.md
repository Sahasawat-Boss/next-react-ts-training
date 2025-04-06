# Style

1. GlobalCSS
2. CSS Module
   - Create a .module.css
    `components/Button.module.css`
   - Import and use it in your component:
   
   ``` 
   import styles from './Button.module.css'
    export default function Button() {
    return <button className={styles.primary}>Click me</button>
    }

3. Tailwind CSS
4. SASS
5. Custom Folder
   ``` src/
    ├── app/
    ├── components/
    ├── styles/      ← your custom folder
    │   ├── buttons.css
    │   ├── layout.css
    │   └── typography.css
    ```

## ⚠️ Notes
- Don’t import global CSS inside components — Next.js will throw an error.

