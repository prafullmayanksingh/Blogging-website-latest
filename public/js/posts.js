const localPostsKey = 'student-blog-local-posts';

const generatedPosts = [
    {
        id: 'prafull-1',
        title: 'The Art of Thoughtful Software Engineering',
        category: 'Technology',
        content: 'Engineering is more than assembling lines of code; it is crafting intuitive experiences that empower people. When we write clean, deliberate code, we respect both future maintainers and end users.',
        date: '2026-09-28T09:30:00.000Z',
        author: 'PRAFULL MAYANK SINGH'
    },
    {
        id: 'prafull-2',
        title: 'Why Great Ideas Need Space to Breathe',
        category: 'Ideas',
        content: 'The human mind is an engine of connections. When we step away from screens and allow quiet moments in nature or during a leisurely walk, breakthrough ideas effortlessly take shape.',
        date: '2026-09-27T10:15:00.000Z',
        author: 'PRAFULL MAYANK SINGH'
    },
    {
        id: 'prafull-3',
        title: 'The Architecture of Mindful Learning',
        category: 'Learning',
        content: 'Mastery in any discipline is not achieved through rushed marathons, but through consistent daily curiosity. Building deliberate mental models transforms complex knowledge into second nature.',
        date: '2026-09-26T14:20:00.000Z',
        author: 'PRAFULL MAYANK SINGH'
    },
    {
        id: 'prafull-4',
        title: 'Design Principles for Everyday Simplicity',
        category: 'Creativity',
        content: 'Simplicity is not the lack of clutter; it is the presence of purpose. By paring down to essentials, we create digital spaces and lifestyles that breathe with elegance and clarity.',
        date: '2026-09-25T11:00:00.000Z',
        author: 'PRAFULL MAYANK SINGH'
    },
    {
        id: 'prafull-5',
        title: 'Journeys Across Uncharted Trails',
        category: 'Travel',
        content: 'Travel teaches us humility. Stepping onto unfamiliar terrain recalibrates our perspective and reminds us how vast and interconnected our world truly is.',
        date: '2026-09-24T16:45:00.000Z',
        author: 'PRAFULL MAYANK SINGH'
    },
    {
        id: 'generated-1',
        title: 'A Small Ritual for Better Mornings',
        category: 'Daily life',
        content: 'Before checking notifications, write down one thing you want to notice today. The habit takes less than a minute, but it gives the morning a direction that belongs to you.',
        date: '2026-09-25T08:00:00.000Z',
        author: 'Maya Chen'
    },
    {
        id: 'generated-2',
        title: 'What I Learned from Growing Basil',
        category: 'Nature',
        content: 'Basil does not respond well to being ignored and it does not respond well to being fussed over. A little sunlight, regular water, and patience turned out to be a useful recipe for more than plants.',
        date: '2026-09-23T08:00:00.000Z',
        author: 'Noah Williams'
    },
    {
        id: 'generated-3',
        title: 'The Case for Walking without Headphones',
        category: 'Ideas',
        content: 'A quiet walk makes room for details that usually disappear: a shop opening, a bird in a parking lot, or the shape of clouds above familiar buildings. Attention is its own kind of entertainment.',
        date: '2026-09-21T08:00:00.000Z',
        author: 'Aisha Patel'
    },
    {
        id: 'generated-4',
        title: 'Three Notes from a Weekend Train Ride',
        category: 'Travel',
        content: 'The best views were between destinations. A handwritten map made the trip feel longer, a bakery near the station was worth the detour, and strangers are often generous with local recommendations.',
        date: '2026-09-19T08:00:00.000Z',
        author: 'Lucas Martin'
    },
    {
        id: 'generated-5',
        title: 'How to Make a Room Feel Finished',
        category: 'Home',
        content: 'A room rarely needs more things. It usually needs one clear surface, warmer light, and a place for the objects that keep wandering from one corner to another.',
        date: '2026-09-17T08:00:00.000Z',
        author: 'Sofia Garcia'
    },
    {
        id: 'generated-6',
        title: 'A Beginner\'s Guide to Repairing Your Focus',
        category: 'Learning',
        content: 'Focus is easier to rebuild when the first step is small. Put the phone in another room, choose one visible task, and work until the next natural pause instead of waiting for perfect motivation.',
        date: '2026-09-15T08:00:00.000Z',
        author: 'Ethan Brooks'
    },
    {
        id: 'generated-7',
        title: 'The Comfort of Cooking One Familiar Dish',
        category: 'Food',
        content: 'Repeating a favorite recipe is not a failure of imagination. It is a way to make an ordinary evening dependable, especially when the rest of the week feels noisy.',
        date: '2026-09-13T08:00:00.000Z',
        author: 'Priya Shah'
    },
    {
        id: 'generated-8',
        title: 'Why Every Notebook Needs a Messy Page',
        category: 'Creativity',
        content: 'The page reserved for unfinished thoughts is often the most useful one. It gives ideas permission to arrive incomplete, which is how most good ideas begin.',
        date: '2026-09-11T08:00:00.000Z',
        author: 'Oliver Reed'
    },
    {
        id: 'generated-9',
        title: 'A Tiny Digital Declutter That Actually Helps',
        category: 'Technology',
        content: 'Delete the screenshots you no longer need, turn off one noisy notification, and move the apps you rarely use away from the first screen. Small reductions make devices feel calmer.',
        date: '2026-09-09T08:00:00.000Z',
        author: 'Zoe Turner'
    },
    {
        id: 'generated-10',
        title: 'The Afternoon I Started Drawing Again',
        category: 'Creativity',
        content: 'The first sketches were awkward, but that was not a problem to solve. They were proof that a neglected skill can be reopened without needing an audience or a plan.',
        date: '2026-09-07T08:00:00.000Z',
        author: 'Daniel Kim'
    },
    {
        id: 'generated-11',
        title: 'What a Library Teaches about Time',
        category: 'Ideas',
        content: 'A library makes time visible. New books, old books, and patient readers share the same room, reminding us that not everything valuable needs to be immediate.',
        date: '2026-09-05T08:00:00.000Z',
        author: 'Amara Okafor'
    },
    {
        id: 'generated-12',
        title: 'Finding a Better Pace for Busy Weeks',
        category: 'Daily life',
        content: 'A busy week becomes more manageable when every day has one protected pause. It does not need to be productive; its job is to help you return to the next task with a little more room.',
        date: '2026-09-03T08:00:00.000Z',
        author: 'Leo Morgan'
    },
    {
        id: 'generated-13', title: 'The Sunday Reset That Takes Twenty Minutes', category: 'Daily life',
        content: 'A short Sunday reset can make Monday feel less crowded. Put away visible clutter, check the week ahead, and choose one small priority.', date: '2026-09-01T08:00:00.000Z', author: 'Nora Ellis'
    },
    {
        id: 'generated-14', title: 'Rain on the Window and Other Small Luxuries', category: 'Daily life',
        content: 'Rain changes the rhythm of an ordinary room. A warm drink, a quiet window, and an unhurried hour can make staying in feel intentional.', date: '2026-08-30T08:00:00.000Z', author: 'Sam Rivera'
    },
    {
        id: 'generated-15', title: 'Why Mornings Need Less Noise', category: 'Daily life',
        content: 'The first minutes of a day do not need to carry every message, decision, and demand. A quieter beginning leaves attention available for what matters.', date: '2026-08-28T08:00:00.000Z', author: 'Ivy Brooks'
    },
    {
        id: 'generated-16', title: 'A Walk through the Community Garden', category: 'Nature',
        content: 'Community gardens show how patience becomes visible. Rows of seedlings, shared tools, and careful watering turn a small patch of ground into a neighborhood conversation.', date: '2026-08-26T08:00:00.000Z', author: 'Caleb Stone'
    },
    {
        id: 'generated-17', title: 'The Tree That Changes before the Weather Does', category: 'Nature',
        content: 'One tree near my bus stop begins changing color before the rest of the street. It has become a quiet calendar that asks me to pay attention.', date: '2026-08-24T08:00:00.000Z', author: 'Mina Park'
    },
    {
        id: 'generated-18', title: 'Learning the Names of Local Birds', category: 'Nature',
        content: 'Naming birds makes a familiar walk feel newly detailed. The world was already full of movement; learning a few names simply made it easier to notice.', date: '2026-08-22T08:00:00.000Z', author: 'Theo Grant'
    },
    {
        id: 'generated-19', title: 'The Question behind a Good Idea', category: 'Ideas',
        content: 'Good ideas often begin as better questions. Before searching for a solution, describe the problem carefully and notice whose experience has been overlooked.', date: '2026-08-20T08:00:00.000Z', author: 'Lena Morris'
    },
    {
        id: 'generated-20', title: 'A Different Way to Measure Progress', category: 'Ideas',
        content: 'Progress is not always a dramatic result. Sometimes it is returning to a difficult task with more patience, clearer language, or a kinder expectation.', date: '2026-08-18T08:00:00.000Z', author: 'Owen Bell'
    },
    {
        id: 'generated-21', title: 'The Map Is Not the Whole Journey', category: 'Travel',
        content: 'Planning a trip creates a useful outline, but the best memories often live outside it. A wrong turn, a local suggestion, or a delayed train can change the shape of a day.', date: '2026-08-16T08:00:00.000Z', author: 'Eva Collins'
    },
    {
        id: 'generated-22', title: 'A Small Museum in a Busy City', category: 'Travel',
        content: 'Small museums reward visitors who arrive without a checklist. One room, one object, and one unexpected story can be enough reason to slow down.', date: '2026-08-14T08:00:00.000Z', author: 'Ravi Desai'
    },
    {
        id: 'generated-23', title: 'Packing for the Weather You Hope For', category: 'Travel',
        content: 'Travel packing is a conversation between optimism and practicality. Leave room for the weather to surprise you, and bring something comfortable for the quiet hours.', date: '2026-08-12T08:00:00.000Z', author: 'June Walker'
    },
    {
        id: 'generated-24', title: 'The Shelf That Holds a Room Together', category: 'Home',
        content: 'A shelf can be useful without becoming a display of everything you own. Leave breathing room between meaningful objects and let the wall remain part of the composition.', date: '2026-08-10T08:00:00.000Z', author: 'Mara Lewis'
    },
    {
        id: 'generated-25', title: 'Making Space for an Unfinished Project', category: 'Home',
        content: 'Unfinished projects are easier to return to when they have a visible, orderly place. A basket, tray, or cleared corner can protect momentum from disappearing.', date: '2026-08-08T08:00:00.000Z', author: 'Jonah Reed'
    },
    {
        id: 'generated-26', title: 'The Light beside the Reading Chair', category: 'Home',
        content: 'Good lighting changes how a room feels and how long we want to stay there. A small lamp beside a chair can turn an unused corner into a daily ritual.', date: '2026-08-06T08:00:00.000Z', author: 'Clara Young'
    },
    {
        id: 'generated-27', title: 'Studying by Explaining Aloud', category: 'Learning',
        content: 'Explaining a lesson aloud reveals the places where understanding is still thin. The goal is not to sound perfect; it is to discover what needs another look.', date: '2026-08-04T08:00:00.000Z', author: 'Mateo Cruz'
    },
    {
        id: 'generated-28', title: 'The Useful Discomfort of a New Skill', category: 'Learning',
        content: 'Beginning a new skill can feel awkward because improvement has not yet become visible. Small repetitions create evidence that practice is working beneath the surface.', date: '2026-08-02T08:00:00.000Z', author: 'Hana Wilson'
    },
    {
        id: 'generated-29', title: 'Notes from a Quiet Study Room', category: 'Learning',
        content: 'A quiet study room does more than reduce noise. It gives attention a shared atmosphere, where everyone is gently reminded to stay with the work.', date: '2026-07-31T08:00:00.000Z', author: 'Felix Adams'
    },
    {
        id: 'generated-30', title: 'The Sandwich That Deserves a Plate', category: 'Food',
        content: 'Some meals become better when they are treated with ceremony. Put the sandwich on a plate, add something crisp, and give lunch the attention it usually misses.', date: '2026-07-29T08:00:00.000Z', author: 'Sana Malik'
    },
    {
        id: 'generated-31', title: 'A Soup Recipe with Room for Change', category: 'Food',
        content: 'The best soup recipes are generous with substitutions. A different bean, herb, or vegetable can make the same method feel new while keeping the comfort familiar.', date: '2026-07-27T08:00:00.000Z', author: 'Ben Carter'
    },
    {
        id: 'generated-32', title: 'What Toast Teaches about Timing', category: 'Food',
        content: 'Toast is simple enough to expose timing. A few seconds can separate pale bread from something crisp, fragrant, and ready for whatever comes next.', date: '2026-07-25T08:00:00.000Z', author: 'Talia Moore'
    },
    {
        id: 'generated-33', title: 'The First Line Is Allowed to Be Rough', category: 'Creativity',
        content: 'A first line does not need to prove that an idea is worthwhile. It only needs to give the next line somewhere to begin.', date: '2026-07-23T08:00:00.000Z', author: 'Rosa Nguyen'
    },
    {
        id: 'generated-34', title: 'Collecting Colors from the Afternoon', category: 'Creativity',
        content: 'Color appears differently when we deliberately collect it. A notebook of painted doors, fruit skins, and evening shadows can turn looking into a creative practice.', date: '2026-07-21T08:00:00.000Z', author: 'Arlo James'
    },
    {
        id: 'generated-35', title: 'The Value of Making Something Private', category: 'Creativity',
        content: 'Not every creative act needs an audience. Private work can be experimental, strange, and unfinished, which gives imagination the room it needs to grow.', date: '2026-07-19T08:00:00.000Z', author: 'Keira Shah'
    },
    {
        id: 'generated-36', title: 'A Better Place for Important Files', category: 'Technology',
        content: 'Digital organization works best when it follows a simple rule: important files should be easy to find twice. Use clear names, one trusted location, and a regular review.', date: '2026-07-17T08:00:00.000Z', author: 'Miles Foster'
    },
    {
        id: 'generated-37', title: 'The Notification You Never Needed', category: 'Technology',
        content: 'Notifications ask for attention even when they offer no real value. Turning off one unnecessary alert can make a device feel less like a room that keeps interrupting.', date: '2026-07-15T08:00:00.000Z', author: 'Nia Howard'
    },
    {
        id: 'generated-38', title: 'When a Tool Becomes a Distraction', category: 'Technology',
        content: 'A helpful tool can become another task when its settings and possibilities take over. Choose the smallest setup that supports the work and leave the rest alone.', date: '2026-07-13T08:00:00.000Z', author: 'Eli Turner'
    },
    {
        id: 'generated-39', title: 'The Bench at the End of the Path', category: 'Nature',
        content: 'A bench at the end of a path changes the purpose of walking. It offers a destination, but also permission to stop and notice what the journey gathered.', date: '2026-07-11T08:00:00.000Z', author: 'Amelia Hart'
    },
    {
        id: 'generated-40', title: 'Keeping a Notebook by the Door', category: 'Ideas',
        content: 'A notebook by the door catches thoughts that arrive between places. It is useful because it asks for no ceremony, only a quick mark before the idea leaves.', date: '2026-07-09T08:00:00.000Z', author: 'Isaac Cole'
    },
    {
        id: 'generated-41', title: 'The Recipe Card with Three Handwritings', category: 'Food',
        content: 'A recipe card becomes a family record when different hands add notes over time. Measurements matter, but so do the stories written in the margins.', date: '2026-07-07T08:00:00.000Z', author: 'Leila Ahmed'
    },
    {
        id: 'generated-42', title: 'A Room for Better Conversations', category: 'Home',
        content: 'Conversation changes when a room makes it easy to sit facing one another. Comfortable chairs, softer light, and a cleared table can invite people to stay longer.', date: '2026-07-05T08:00:00.000Z', author: 'Theo Martin'
    }
];

const contentExtension = 'The details are small, but they create a little more room for attention, patience, and curiosity. A useful habit does not need to transform everything at once. It can simply make one ordinary moment easier to notice, understand, or enjoy. That is often enough to begin again tomorrow with a clearer mind and a kinder pace.';

const toOneHundredWords = (content) => {
    const words = content.trim().split(/\s+/).filter(Boolean);
    const extensionWords = contentExtension.split(/\s+/);
    while (words.length < 100) words.push(...extensionWords);
    return words.slice(0, 100).join(' ');
};

const normalizedGeneratedPosts = generatedPosts.map((post) => ({ ...post, content: toOneHundredWords(post.content) }));

// Read posts created by this browser from localStorage.
const getLocalPosts = () => JSON.parse(localStorage.getItem(localPostsKey) || '[]');

// Save posts created, edited, or deleted in this browser.
const saveLocalPosts = (posts) => localStorage.setItem(localPostsKey, JSON.stringify(posts));

// Built-in posts are read-only; only posts saved in this browser can be managed.
export const isLocalPost = (id) => getLocalPosts().some((post) => String(post.id) === String(id));

// Return built-in posts and add this browser's saved posts to them.
export const getPosts = async () => {
    return [...getLocalPosts(), ...normalizedGeneratedPosts];
};

// Find one browser-saved or built-in post.
export const getPost = async (id) => {
    try {
        const localPost = getLocalPosts().find((post) => String(post.id) === String(id));
        if (localPost) return localPost;
        const generatedPost = normalizedGeneratedPosts.find((post) => String(post.id) === String(id));
        if (!generatedPost) throw new Error('The post was not found.');
        return generatedPost;
    } catch (error) {
        throw new Error(error.message || 'The post could not be loaded.');
    }
};

// Create a post locally because the public API is read-only for this demo.
export const createPost = async (postData) => {
    try {
        const newPost = { ...postData, id: Date.now(), date: new Date().toISOString() };
        saveLocalPosts([newPost, ...getLocalPosts()]);
        return newPost;
    } catch (error) {
        throw new Error('The post could not be saved in this browser.');
    }
};

// Update a browser-saved post in localStorage.
export const updatePost = async (id, postData) => {
    try {
        const localPosts = getLocalPosts();
        const existingPost = localPosts.find((post) => String(post.id) === String(id));
        if (!existingPost) throw new Error('Only posts created in this browser can be edited.');
        if (existingPost.author !== postData.author) throw new Error('Only the post author can edit this post.');
        const updatedPost = { ...postData, id: Number(id), date: new Date().toISOString() };
        const updatedPosts = localPosts.map((post) => post.id === Number(id) ? updatedPost : post);
        saveLocalPosts(updatedPosts);
        return updatedPost;
    } catch (error) {
        throw new Error('The post could not be updated in this browser.');
    }
};

// Delete a browser-saved post from localStorage.
export const deletePost = async (id) => {
    try {
        if (!isLocalPost(id)) throw new Error('Only posts created in this browser can be deleted.');
        const remainingPosts = getLocalPosts().filter((post) => post.id !== Number(id));
        saveLocalPosts(remainingPosts);
        return { message: 'Post deleted successfully.' };
    } catch (error) {
        throw new Error('The post could not be deleted from this browser.');
    }
};
