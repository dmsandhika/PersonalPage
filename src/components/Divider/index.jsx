const Divider = () => {
  return (
    <div className="flex my-24 mx-12 ">
    <button
      class="flex-grow place-items-center text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
    >
      Explore My Portfolio
    </button>

    <div className="divider divider-horizontal">OR</div>
    <button
      class="flex-grow place-items-center text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
    >
      Contact Me for Collaborations
    </button>

</div>
  )
}
export default Divider;